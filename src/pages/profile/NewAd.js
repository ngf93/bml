import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBack } from "react-icons/md";
import {onImageHandler, onImagesHandler, onInputHandler, onSelectHandler} from "../../helpers/formHandlers";
import {useImageViewer} from "../../hooks/imageViewer";
import {useImagesViewer} from "../../hooks/imagesViewer";

export default function NewAd() {

    const [category, setCategory] = useState('0');
    const [data, setData] = useState({})
    const fileDataURL = useImageViewer(data?.file)
    const images = useImagesViewer(data?.files)

    console.log(data?.files)
    console.log(images)
    console.log(data)

    return (
        <>
            <Link to="/account/my-ads" className='color-1 f_11 fw_5 d-flex align-items-center d-lg-none mb-3 mb-sm-4'><MdOutlineArrowBack /> <span className='ms-2'>Назад</span></Link>
            <h4>Новое объявление</h4>
            <form >
                <fieldset class="row align-items-center mb-4 mb-sm-5">
                    <div class="col-sm-6 col-lg-4">
                        <div class="fw_7 text-uppercase mb-2 mb-sm-0">Категория</div>
                    </div>
                    <div class="col-sm-6 col-lg-8">
                        <select
                            defaultValue={category}
                            name="category"
                            onChange={(e) => onSelectHandler(e, setData, true)}
                            onClick={(e)=>setCategory(e.target.value)}
                        >
                            <option value="0">Поиск инвесторов</option>
                            <option value="1">Предложения инвесторов</option>
                            <option value="2">Поиск бизнес партнёров</option>
                            <option value="3">Продажа готового бизнеса</option>
                            <option value="4">Франшизы</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend class="fw_7 f_10 text-uppercase mb-3 mb-sm-4">Параметры</legend>

                    <div class="row align-items-center mb-3 mb-sm-4">
                        <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                            <div>{(category==='4') ? 'Название франшизы' : 'Название объявления'}<span className='red'>*</span></div>
                        </div>
                        <div class="col-sm-6 col-lg-8">
                            <input
                                type="text"
                                required={true}
                                placeholder="Например, продажа офисных помещений"
                                name='adName'
                                onChange={e => onInputHandler(e, setData)}
                            />
                        </div>
                    </div>

                    <div class="row mb-3 mb-sm-4">
                        <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0 pt-sm-2">
                            <div>
                            {
                                (category==='0' || category==='1' || category==='2')
                                ? 'Описание объявления'
                                : (category==='3') ? 'Описание бизнеса'
                                : 'Описание компании'
                            }
                                <span className='red'>*</span>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-8">
                            <textarea
                                rows="4"
                                required={true}
                                placeholder={
                                    (category === '0' || category === '1' || category === '2')
                                        ? 'Описание объявления'
                                        : (category === '3')
                                            ? 'Описание бизнеса'
                                            : 'Описание компании'
                                }
                                name='description'
                                onChange={e => onInputHandler(e, setData)}
                            />
                        </div>
                    </div>
                    {
                        (category==='4') &&
                        <>
                            <div class="row mb-3 mb-sm-4">
                                <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0 pt-sm-2">
                                    <div>Описание франшизы<span className='red'>*</span></div>
                                </div>
                                <div class="col-sm-6 col-lg-8">
                                    <textarea
                                        rows="4"
                                        required={true}
                                        placeholder="Описание франшизы"
                                        name='descriptionFranchise'
                                    />
                                </div>
                            </div>
                            <div class="row mb-3 mb-sm-4">
                                <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0 pt-sm-2">
                                    <div>Преимущества франшизы</div>
                                </div>
                                <div class="col-sm-6 col-lg-8">
                                    <textarea
                                        rows="4"
                                        placeholder="Преимущества франшизы"
                                        name='advantageFranchise'
                                        onChange={e => onInputHandler(e, setData)}
                                    />
                                </div>
                            </div>
                        </>
                    }
                    <div class="row mb-3 mb-sm-4">
                        <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0 pt-sm-2">
                            <div>
                            {
                                (category==='0' || category==='2' || category==='4')
                                    ? <>Условия сотрудничества<span className='red'>*</span></>
                                    : (category==='1')
                                        ? 'Предполагаемые условия сотрудничества'
                                        : <>Условия продажи<span className='red'>*</span></>
                            }
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-8">
                            <textarea
                                rows="4"
                                required={(category !== '1')}
                                placeholder={
                                    (category === '0' || category === '2' || category === '4')
                                        ? 'Условия сотрудничества'
                                        : (category === '1')
                                            ? 'Предполагаемые условия сотрудничества'
                                            : 'Условия продажи'
                                }
                                name='termsTransaction'
                                onChange={e => onInputHandler(e, setData)}
                            />
                        </div>
                    </div>
                    {
                        (category==='0' || category==='2' || category==='3' || category==='4') &&
                        <div class="row mb-3 mb-sm-4">
                            <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0 pt-sm-2">
                                <div>Бизнес-план{(category==='4') && <span className='red'>*</span>}</div>
                            </div>
                            <div class="col-sm-6 col-lg-8">
                                <textarea
                                    rows="4"
                                    required={(category === '4')}
                                    placeholder="Бизнес-план"
                                    name='business plan'
                                    onChange={e => onInputHandler(e, setData)}
                                />
                            </div>
                        </div>
                    }
                    {
                        (category==='0' || category==='1' || category==='2') &&
                        <div class="row mb-3 mb-sm-4">
                            <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0 pt-sm-2">
                                <div>О себе</div>
                            </div>
                            <div class="col-sm-6 col-lg-8">
                                <textarea
                                    rows="4"
                                    placeholder="О себе"
                                    name='aboutMe'
                                    onChange={e => onInputHandler(e, setData)}
                                />
                            </div>
                        </div>
                    }
                    <div class="row mb-3 mb-sm-4">
                        <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                            <div>Обложка объявления</div>
                            <div class="l-gray f_09 mt-1">Размер 600х400</div>
                        </div>
                        <div class="col-sm-6 col-lg-8">
                            <div className="file-upload">
                                <button className="btn_main btn_2 fw_4">Загрузить</button>
                                <input
                                    type="file"
                                    onChange={e => {
                                        onImageHandler(e, 'file', setData)
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3 mb-sm-4">
                        <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                            <div>Фотогалерея</div>
                            <div class="l-gray f_09 mt-1">Не более 10</div>
                        </div>
                        <div class="col-sm-6 col-lg-8">
                            <div className="file-upload">
                                <button className="btn_main btn_2 fw_4">Загрузить</button>
                                <input
                                    type="file"
                                    multiple
                                    onChange={e => onImagesHandler(e, 'files', setData)}
                                />
                            </div>
                        </div>
                    </div>
                    {
                        (category==='4') &&
                        <div class="row mb-3 mb-sm-4">
                            <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                                <div>Загрузить видео</div>
                            </div>
                            <div class="col-sm-6 col-lg-8">
                                <input
                                    type="text"
                                    placeholder="Вставить ссылку"
                                    name='videoLink'
                                    onChange={e => onInputHandler(e, setData)}
                                />
                            </div>
                        </div>
                    }
                    <div class="row align-items-center mb-3 mb-sm-4">
                        <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                            <div>Город<span className='red'>*</span></div>
                        </div>
                        <div class="col-sm-6 col-lg-8">
                            <select
                                name='city'
                                onChange={e => onSelectHandler(e, setData)}
                            >
                                <option value='0' selected>Город</option>
                                <option value='1'>Казань</option>
                                <option value='2'>Москва</option>
                                <option value='3'>СПБ</option>
                            </select>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3 mb-sm-4">
                        <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                            <div>Сфера<span className='red'>*</span></div>
                        </div>
                        <div class="col-sm-6 col-lg-8">

                            <select
                                name='fieldOfActivity'
                                onChange={e => onSelectHandler(e, setData)}
                            >
                                <option value='0' selected>Сфера</option>
                                <option value='1'>Пивоварение</option>
                                <option value='2'>Энерговарение</option>
                                <option value='3'>Водоварение</option>
                            </select>
                        </div>
                    </div>
                    <div class="row align-items-center mb-3 mb-sm-4">
                        <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                            <div>Подраздел<span className='red'>*</span></div>
                        </div>
                        <div class="col-sm-6 col-lg-8">
                            <select
                                name='subsection'
                                onChange={e => onSelectHandler(e, setData)}
                            >
                                <option value='0'>Подраздел</option>
                                <option value='1'>Что-то: 1</option>
                                <option value='2'>Что-то: 2</option>
                                <option value='3'>Что-то: 3</option>
                            </select>
                        </div>
                    </div>
                    {
                        (category==='3') &&
                        <>
                            <div class="row align-items-center mb-3 mb-sm-4">
                                <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                                    <div>Количество точек<span className='red'>*</span></div>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <input
                                        type="number"
                                        required={true}
                                        placeholder="0"
                                        class="f_09"
                                        name='pointCount'
                                        onChange={e => onInputHandler(e, setData,true)}
                                    />
                                </div>
                            </div>
                            <div class="row align-items-center mb-3 mb-sm-4">
                                <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                                    <div>Стоимость бизнеса<span className='red'>*</span></div>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <input
                                        type="number"
                                        required={true}
                                        placeholder="0"
                                        class="f_09"
                                        name='businessValue'
                                        onChange={e => onInputHandler(e, setData,true)}
                                    />
                                </div>
                            </div>
                        </>
                    }
                    {
                        (category==='0' || category==='1' || category==='2' || category==='4') &&
                        <div class="row align-items-center mb-3 mb-sm-4">
                            <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                                <div>
                                    {
                                        (category==='0' || category==='2')
                                            ? 'Требуемые инвестиции'
                                            : (category==='1')
                                                ? 'Возможные инвестиции'
                                                : 'Стартовые инвестиции от'
                                    }
                                    <span className='red'>*</span>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-4">
                                <input
                                    type="number"
                                    required={true}
                                    placeholder="0"
                                    class="f_09 input-price"
                                    name='investments'
                                    onChange={e => onInputHandler(e, setData, true)}
                                />
                            </div>
                        </div>
                    }
                    {
                        (category==='4')&&
                        <>
                            <div class="row align-items-center mb-3 mb-sm-4">
                                <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                                    <div>Паушальный взнос<span className='red'>*</span></div>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <input
                                        type="number"
                                        required={true}
                                        placeholder="0"
                                        class="f_09"
                                        name='Lump sum'
                                        onChange={e => onInputHandler(e, setData,true)}
                                    />
                                </div>
                            </div>
                            <div class="row align-items-center mb-4">
                                <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                                    <div>Роялти<span className='red'>*</span></div>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <input
                                        type="number"
                                        required={true}
                                        placeholder="0"
                                        class="f_09"
                                        name='royalty'
                                        onChange={e => onInputHandler(e, setData, true)}
                                    />
                                </div>
                            </div>
                        </>
                    }
                    {
                        (category==='0' || category==='2' || category==='4') &&
                        <div class="row align-items-center mb-3 mb-sm-4">
                            <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                                <div>Предполагаемая прибыль / мес</div>
                            </div>
                            <div class="col-sm-6 col-lg-4">
                                <input
                                    type="number"
                                    placeholder="0"
                                    class="f_09 input-price"
                                    name='estimatedProfit'
                                    onChange={e => onInputHandler(e, setData, true)}
                                />
                            </div>
                        </div>
                    }
                    <div class="row align-items-center mb-3 mb-sm-4">
                        <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                            <div>Окупаемость</div>
                        </div>
                        <div class="col-sm-6 col-lg-8">
                            <select
                                name='Payback'
                                onChange={e => onSelectHandler(e, setData)}
                            >
                                <option value='0'>Окупаемость</option>
                                <option value='1'>1 год</option>
                                <option value='2'>2 года</option>
                                <option value='3'>3 года</option>
                            </select>
                        </div>
                    </div>
                    {
                        (category==='0' || category==='2') &&
                        <div class="row align-items-center mb-3 mb-sm-4">
                            <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                                <div>Стадия проекта<span className='red'>*</span></div>
                            </div>
                            <div class="col-sm-6 col-lg-8">
                                <select
                                    name='projectStage'
                                    onChange={e => onSelectHandler(e, setData)}
                                >
                                    <option value='0'>Стадия проекта</option>
                                    <option value='1'>Готов</option>
                                    <option value='2'>Строится</option>
                                    <option value='3'>Только начали</option>
                                </select>
                            </div>
                        </div>
                    }
                    {
                        (category==='3') &&
                        <>
                            <div class="row align-items-center mb-3 mb-sm-4">
                                <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                                    <div>Оборот в месяц</div>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <input
                                        type="number"
                                        placeholder="0"
                                        class="f_09"
                                        name='turnoverPerMonth'
                                        onChange={e => onInputHandler(e, setData, true)}
                                    />
                                </div>
                            </div>
                            <div class="row align-items-center mb-3 mb-sm-4">
                                <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                                    <div>Чистая прибыль<span className='red'>*</span></div>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <input
                                        type="number"
                                        required={true}
                                        placeholder="0"
                                        class="f_09"
                                        name='netProfit'
                                        onChange={e => onInputHandler(e, setData, true)}
                                    />
                                </div>
                            </div>
                        </>
                    }
                    {
                        (category==='4') &&
                        <>
                            <div class="row align-items-center mb-3 mb-sm-4">
                                <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                                    <div>Год основания компании</div>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <input
                                        type="number"
                                        placeholder="0"
                                        class="f_09"
                                        name='createYearComp'
                                        onChange={e => onSelectHandler(e, setData, true)}
                                    />
                                </div>
                            </div>
                            <div class="row align-items-center mb-3 mb-sm-4">
                                <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                                    <div>Количество собственных точек</div>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <input
                                        type="number"
                                        placeholder="0"
                                        class="f_09"
                                        name='numberOfOwnPoints'
                                        onChange={e => onInputHandler(e, setData, true)}
                                    />
                                </div>
                            </div>
                            <div class="row align-items-center mb-3 mb-sm-4">
                                <div class="col-sm-6 col-lg-4 mb-1 mb-sm-0">
                                    <div>Количество проданных франшиз</div>
                                </div>
                                <div class="col-sm-6 col-lg-4">
                                    <input
                                        type="number"
                                        placeholder="0"
                                        class="f_09"
                                        name='numberOfFranchisesSold'
                                        onChange={e => onInputHandler(e, setData, true)}
                                    />
                                </div>
                            </div>
                        </>
                    }
                </fieldset>

                {
                    (category==='4') &&
                    <fieldset className='mt-3 mt-sm-4 mt-md-5'>
                        <legend class="fw_7 f_10 text-uppercase mb-2 mb-sm-4">Размещение объявления на 30 дней</legend>
                        <div className='f_xs_08 row gx-2 gx-sm-3 gx-xl-4'>
                            <div className='col-5 col-md-4'>
                                <div class="acc-box w-100 h-100">
                                    <label class="mb-2 mb-xl-3">
                                        <input name="ad-type" type="radio"/>
                                        <span className='ms-1 ms-sm-2 ms-xl-3'>Разместить</span>
                                    </label>
                                    <div class="fw_6 sky">3 мес. — 6 000 рублей</div>
                                </div>
                            </div>
                            <div className='col-7 col-md-4'>
                                <div class="acc-box w-100 h-100">
                                    <label class="mb-2 mb-xl-3">
                                        <input name="ad-type" type="radio"/>
                                        <span className='ms-1 ms-sm-2 ms-xl-3'>Большое объявление (пример)</span>
                                    </label>
                                    <div class="fw_6 sky">6 мес. — 11 000 рублей</div>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 mt-2 mt-sm-3 mt-md-0'>
                                <Link to='/account/my-ads/premium' className='btn_main btn_5 f_13 w-100 h-100'>Premium-размещение</Link>
                            </div>
                        </div>
                    </fieldset>
                }
                <button class="btn_main btn_1 fw_4 mt-4" type="submit">
                    {
                        (category==='4')
                        ? 'Создать и перейти к оплате'
                        : 'Отправить на модерацию'
                    }
                </button>
            </form>
        </>
    );
}